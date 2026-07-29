import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { Components } from 'react-markdown';

type PostBodyProps = {
  content: string;
};

const markdownComponents: Components = {
  p: (props) => (
    <p className="text-fg/90 mt-6 text-[1.0625rem] leading-[1.85] first:mt-0" {...props} />
  ),
  h2: (props) => (
    <h2
      className="text-fg mt-14 text-[clamp(1.75rem,3vw,2.4rem)] leading-tight font-semibold tracking-[-0.04em] first:mt-0"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="text-fg mt-8 text-[1.28rem] leading-snug font-semibold tracking-[-0.02em]"
      {...props}
    />
  ),
  ul: (props) => (
    <ul className="text-fg/90 mt-5 ml-5 list-disc text-[1.0625rem] leading-[1.85]" {...props} />
  ),
  ol: (props) => (
    <ol className="text-fg/90 mt-5 ml-5 list-decimal text-[1.0625rem] leading-[1.85]" {...props} />
  ),
  li: (props) => <li className="mt-2" {...props} />,
  a: (props) => (
    <a
      className="text-accent underline decoration-from-font underline-offset-4 transition-opacity hover:opacity-80"
      target={props.href?.startsWith('http') ? '_blank' : undefined}
      rel={props.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="border-accent text-muted my-10 border-l-2 pl-5 text-[1.0625rem] leading-[1.85] italic"
      {...props}
    />
  ),
  code: ({ className, children, ...rest }) => {
    const isBlock = !!className;
    if (isBlock) {
      return (
        <code className="text-fg block font-mono text-sm leading-7" {...rest}>
          {children}
        </code>
      );
    }
    return (
      <code
        className="border-line bg-surface-2 text-fg rounded-sm border px-1.5 py-0.5 font-mono text-[0.9em]"
        {...rest}
      >
        {children}
      </code>
    );
  },
  pre: (props) => (
    <pre
      className="border-line bg-surface-2/60 my-8 overflow-x-auto border p-5 text-sm leading-7"
      {...props}
    />
  ),
  table: (props) => (
    <div className="border-line my-8 overflow-x-auto border">
      <table className="w-full border-collapse text-sm" {...props} />
    </div>
  ),
  thead: (props) => <thead className="bg-surface-2/50 text-fg" {...props} />,
  th: (props) => (
    <th
      className="border-line border-b px-4 py-3 text-left text-[0.75rem] font-bold tracking-[.06em] uppercase"
      {...props}
    />
  ),
  td: (props) => <td className="border-line border-t px-4 py-3 align-top" {...props} />,
  hr: (props) => <hr className="border-line my-12" {...props} />,
  strong: (props) => <strong className="text-fg font-semibold" {...props} />,
};

export function PostBody({ content }: PostBodyProps) {
  return (
    <article className="text-fg">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
        {content}
      </ReactMarkdown>
    </article>
  );
}
