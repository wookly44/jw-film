// Inner (컨테이너) 컴포넌트
// <section>은 배경색/상하 여백을, <Inner>는 가로 최대너비 제한 + 중앙 정렬 + 좌우 거터를 담당합니다.
const MAX_WIDTH = {
  narrow: "max-w-xl",
  default: "max-w-7xl",
  wide: "max-w-[1440px]",
};

export default function Inner({
  size = "default",
  gutter = true,
  className = "",
  children,
  ...rest
}) {
  const classes = [
    "mx-auto",
    MAX_WIDTH[size] ?? MAX_WIDTH.default,
    gutter && "px-5 sm:px-8",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}
