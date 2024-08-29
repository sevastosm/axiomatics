import TreeView from "./TreeView";

type Props = {data:any};

function Tree({ data }: Props) {
  return (
    <div className="px-4 mt-4 flex flex-col w-full">
      <TreeView data={data} />
    </div>
  );
}

export default Tree;
