import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();
  // get all pastes
  const allPastes = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    console.log("inside useEffect...");
    if (pasteId) {
      const paste = allPastes.find((p) => p.__id === pasteId);
      setTitle(paste.title);
      setValue(paste.content);
    }
  }, [allPastes, pasteId]);

  function createPaste() {
    const paste = {
      title: title,
      content: value,
      __id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };

    // provide to reducer func
    if (pasteId) {
      // update | if already available
      dispatch(updateToPastes(paste));
    } else {
      // create | if not available
      dispatch(addToPastes(paste));
    }

    // cleaning | after creation or updation
    setTitle("");
    setValue("");
    setSearchParams({});
  }

  return (
    <div>
      {/* title  */}
      <div className="flex gap-7 place-content-between">
        <input
          className=" border-red-300 border-2 px-3 rounded-xl w-[53%] "
          type="text"
          value={title}
          placeholder="enter title"
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* call creatPaste on click | conditional rendering   */}
        <button onClick={createPaste}>
          {pasteId ? "Update My Paste" : "Create My Paste"}
        </button>
      </div>

      {/* value  */}
      <div className="mt-4">
        <textarea
          className=" border-red-300 border-2 p-3 rounded-xl  min-w-[400px]"
          value={value}
          placeholder="enter content here..."
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
      </div>
    </div>
  );
};

export default Home;
