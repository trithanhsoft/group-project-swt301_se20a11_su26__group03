import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import App from '../App';

describe('App Component UI Tests', () => {
  beforeEach(() => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([
          { id: 1, title: 'Test Task', description: 'Test Desc', status: 'pending' }
        ]),
        ok: true
      })
    );
  });

  it('renders Task Management System heading', async () => {
    render(<App />);
    expect(screen.getByText('Task Management System')).toBeInTheDocument();
  });

  it('fetches and displays tasks on mount', async () => {
    render(<App />);
    
    await waitFor(() => {
      expect(screen.getByText('Test Task')).toBeInTheDocument();
    });
    expect(screen.getByText('Test Desc')).toBeInTheDocument();
    expect(screen.getByText('pending')).toBeInTheDocument();
  });

  it('shows error when submitting without title', async () => {
    render(<App />);
    
    const addButton = screen.getByText('Add Task');
    fireEvent.click(addButton);
    
    await waitFor(() => {
      expect(screen.getByRole('alert')).toHaveTextContent('Title is required');
    });
  });

  it('adds a new task successfully', async () => {
    global.fetch.mockImplementationOnce(() => Promise.resolve({
      json: () => Promise.resolve([]),
      ok: true
    }))
    .mockImplementationOnce(() => Promise.resolve({
      ok: true
    }))
    .mockImplementationOnce(() => Promise.resolve({
      json: () => Promise.resolve([{ id: 2, title: 'New Task', description: '', status: 'pending' }]),
      ok: true
    }));

    render(<App />);
    
    const titleInput = screen.getByPlaceholderText('Task Title');
    fireEvent.change(titleInput, { target: { value: 'New Task' } });
    
    const addButton = screen.getByText('Add Task');
    fireEvent.click(addButton);
    
    await waitFor(() => {
      expect(screen.getByText('New Task')).toBeInTheDocument();
    });
  });
});
