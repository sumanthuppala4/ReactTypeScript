import { type ComponentPropsWithoutRef } from "react";

type buttonProps = {
  en: "button";
} & ComponentPropsWithoutRef<"button">;

type AnchorProps = { en: "link" } & ComponentPropsWithoutRef<"a">;

type componentProps = AnchorProps | buttonProps;

export default function Button(props: componentProps) {
  if (props.en === "link") {
    const { href, children, ...rest } = props;

    return (
      <a href={href} className="button" {...rest}>
        {children}
      </a>
    );
  }
  const { onClick, children, ...rest } = props;
  return (
    <button onClick={onClick} className="button" {...rest}>
      {children}
    </button>
  );
}
