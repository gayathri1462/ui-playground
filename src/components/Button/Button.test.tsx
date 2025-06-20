import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
  it('renders with label', () => {
    render(<Button label="Test Button" />);
    expect(screen.getByText('Test Button')).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button label="Click me" onClick={handleClick} />);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when disabled', () => {
    const handleClick = jest.fn();
    render(<Button label="Disabled" disabled onClick={handleClick} />);
    const button = screen.getByText('Disabled');
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('applies custom backgroundColor if not disabled', () => {
    render(<Button label="Custom" backgroundColor="#ff0000" />);
    const button = screen.getByText('Custom');
    expect(button).toHaveStyle({ backgroundColor: '#ff0000' });
  });

  it('ignores backgroundColor when disabled', () => {
    render(<Button label="NoColor" backgroundColor="#ff0000" disabled />);
    const button = screen.getByText('NoColor');
    expect(button).not.toHaveStyle({ backgroundColor: '#ff0000' });
  });
});
