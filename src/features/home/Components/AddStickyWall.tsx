import { FC, ReactElement, useEffect } from "react";
import EditorJS from '@editorjs/editorjs';
import Header from "@editorjs/header";
import EditorjsList from "@editorjs/list";
import { IAddStickyWallProp } from "@/shared/types/Home.types";

const AddStickyWall: FC<IAddStickyWallProp> = ({setShowModal,showModal}): ReactElement => {
  useEffect(() => {
    new EditorJS({
      holder: "editor",
      tools: {
        header: Header,
        list: {
          class: EditorjsList,
          inlineToolbar: true,
          config: {
            defaultStyle: 'unordered'
          },
        },


      },
    })
  }, [])
  return (
    <div className={`${showModal ? "scale-100" : "scale-0"}  absolute top-[50%] bg-slate-100 border-2 p-4 border-gray-200 left-[50%] z-50 h-[60vh] w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] -translate-y-[50%] -translate-x-[50%] rounded-2xl transition-all duration-500`} >
      <div className="border-b border-gray-300 py-2 flex items-center justify-between" >
        <h3 className=" text-lg" >Create Sticky Wall</h3>
        <img src="/svg/close.svg" className="cursor-pointer" onClick={setShowModal} />
      </div>
      <div id="editor" className="overflow-y-scroll overflow-x-hidden h-[80%]" >

      </div>
      <div className="border-t border-gray-300  flex items-end w-full justify-end py-2" >
        <button className="py-2 px-4 rounded-lg bg-gray-300" >Create</button>
      </div>
    </div>
  );
};

export default AddStickyWall;
