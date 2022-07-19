type ParagraphProps = {
  children: string;
};

export default function Paragraph({ children }: ParagraphProps) {
  return <p className="text-justify text-xl">{children}</p>;
}
