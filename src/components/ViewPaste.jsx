import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ViewPaste = () => {
  const { id } = useParams();
  const allPastes = useSelector((state) => state.paste.pastes);
  const paste = allPastes.filter((p) => p.__id === id)[0];
  console.log("final paste", paste);

  return (
    <div>
      {/* title  */}
      <div className="flex gap-7 place-content-between">
        <input
          className=" border-red-300 border-2 p-1 rounded-xl mt-2 w-[53%]"
          type="text"
          placeholder="enter title here"
          value={paste.title}
          disabled
        />

        {/* call creatPaste on click | conditional rendering   */}
        {/* <button onClick={createPaste}>
          {pasteId ? "Update My Paste" : "Create My Paste"}
        </button> */}
      </div>

      {/* value  */}
      <div className="mt-4">
        <textarea
          className=" border-red-300 border-2 p-1 rounded-xl  min-w-[400px]"
          placeholder="enter content here"
          value={paste.content}
          rows={20}
          disabled
        />
      </div>
    </div>
  );
};

export default ViewPaste;
