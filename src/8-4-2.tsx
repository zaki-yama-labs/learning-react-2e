import faker from "faker";
import { CSSProperties } from "react";
import { FixedSizeList } from "react-window";

const bigList = [...Array(5000)].map(() => ({
  name: faker.name.findName(),
  email: faker.internet.email(),
  avatar: faker.internet.avatar(),
}));

type ListProps<Item = Record<string, unknown>> = {
  data?: Item[];
  renderEmpty: JSX.Element;
  renderItem: (item: Item) => JSX.Element;
};

const ListWithoutWindow = <Item,>({
  data = [],
  renderEmpty,
  renderItem,
}: ListProps<Item>) => {
  return !data.length ? (
    renderEmpty
  ) : (
    <ul>
      {data.map((item, i) => (
        <li key={i}>{renderItem(item)}</li>
      ))}
    </ul>
  );
};

export const App = () => {
  const renderRow = ({
    index,
    style,
  }: {
    index: number;
    style: CSSProperties;
  }) => (
    <div style={{ ...style, ...{ display: "flex" } }}>
      <img src={bigList[index].avatar} alt={bigList[index].name} width={50} />
      <p>
        {bigList[index].name} - {bigList[index].email}
      </p>
    </div>
  );

  return (
    <FixedSizeList
      height={window.innerHeight}
      width={window.innerWidth - 20}
      itemCount={bigList.length}
      itemSize={50}
    >
      {renderRow}
    </FixedSizeList>
  );
};
