const tahoe_peaks = [
  { name: "Freel Peak", elevation: 10891 },
  { name: "Monument Peak", elevation: 10067 },
  { name: "Pyramid Peak", elevation: 9983 },
  { name: "Mt. Tallac", elevation: 9735 },
];

type Item = {
  name: string;
  elevation: number;
};

type ListProps = {
  data?: Item[];
  renderEmpty: JSX.Element;
  renderItem: (item: Item) => JSX.Element;
};

const List = ({ data = [], renderEmpty, renderItem }: ListProps) => {
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
  return (
    <List
      renderEmpty={<p>This list is empty</p>}
      data={tahoe_peaks}
      renderItem={(item) => (
        <>
          {item.name} = {item.elevation.toLocaleString()}
        </>
      )}
    />
  );
};
