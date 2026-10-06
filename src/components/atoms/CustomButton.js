function CustomButton({ text, href }) {
  return (
    <a
      className="btn btn-primary"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
}

export default CustomButton;