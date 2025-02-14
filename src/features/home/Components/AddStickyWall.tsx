import { FC, ReactElement, useEffect, useState } from "react";
import EditorJS from '@editorjs/editorjs';
import Header from "@editorjs/header";
import EditorjsList from "@editorjs/list";
import { IAddStickyWallProp } from "@/shared/types/Home.types";

const AddStickyWall: FC<IAddStickyWallProp> = ({ setShowModal, showModal }): ReactElement => {

  const [editor,setEditor] = useState<any>(null)

  const GetData = async () => {
    if(editor){
      editor.save().then((data:any)=>{
        console.log(data)
      }).catch((err:any) => console.log(err))
    }
  }


  useEffect(() => {
    
   const editor = new EditorJS({
      holder: "editor",
      placeholder: 'Let`s write an awesome Sticky wall!',
      tools: {
        
        header: {
          class: Header,
          inlineToolbar: true,
          config: {
            placeholder: 'Enter a header',
            levels: [2, 3, 4, 5, 6],
            defaultLevel: 3
          }
        },
        list: {
          class: EditorjsList,
          inlineToolbar: true,
          config: {
            defaultStyle: 'unordered'
          },
        },
      },
     
    })

    editor.isReady.then(()=>{
      setEditor(editor)
    }).catch((err)=>console.log(err))



    return () => {
      editor.destroy();
    };
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
        <button onClick={GetData} className="py-2 px-4 rounded-lg bg-gray-300" >Create</button>
      </div>
    </div>
  );
};

export default AddStickyWall;
