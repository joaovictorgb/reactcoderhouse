interface ButtonProps {
  backgroundColor: string;
  onClick: () => void;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  backgroundColor,
  onClick,
  disabled = false,
  size = 'medium',
  children
}) => {
  const sizeStyles = {
    small: 'px-6 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg'
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${sizeStyles[size]} rounded-md transition-all duration-200 hover:opacity-90`}
      style={{ backgroundColor }}
    >
      {children}
    </button>
  );
};

export default Button; 