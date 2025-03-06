type Props = {
  color: string;
  fontSize: string;
};

export const Text: React.FC<Props> = (props) => { // 関数に対して型を指定。この場合propsの型も一緒に記述する
  const { color, fontSize} = props;
  return (
    <p style={{ color, fontSize }}>テキストです</p> // color: color, fontSize: fontSize の省略記法
  );
}

// FC　ファンクショナルコンポーネントの略 暗黙的にchildrenを受け取れるようになっていたが、React v18から指定しないとchildrenを受け取れないようになった