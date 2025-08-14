import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "../redux/pasteSlice";
import toast, { Toaster } from "react-hot-toast";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }

  return (
    <div>
      <input
        className=" border-red-300 border-2 p-2 rounded-xl mt-4 min-w-[600px]"
        type="search"
        placeholder="search here"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="flex flex-col gap-5 mt-5">
        {filteredData.length > 0 &&
          filteredData.map((paste) => {
            return (
              <div className="border border-b-blue-400" key={paste.__id}>
                <div>{paste.title}</div>
                <div>{paste.content}</div>

                <div className="flex gap-4 place-content-evenly">
                  <button>
                    <a href={`/?pasteId=${paste.__id}`}>Edit</a>
                  </button>
                  <button>
                    <a href={`/pastes/${paste.__id}`}>View</a>
                  </button>
                  <button onClick={() => handleDelete(paste.__id)}>
                    Delete
                  </button>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(paste?.content);
                      toast.success("Copied to clipboard");
                    }}
                  >
                    Copy
                  </button>
                  <button>Share</button>
                </div>
                <div>{paste.createdAt}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Paste;
