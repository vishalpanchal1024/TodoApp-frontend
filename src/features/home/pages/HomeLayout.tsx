import { Sidebar } from "@/lazylord/homePages";
import { IHomeLayout } from "@/shared/types/Home.types";
import { FC, ReactElement } from "react";

const HomeLayout: FC<IHomeLayout> = ({ children }): ReactElement => {
  return (
    <div className="p-5 flex h-screen gap-5">
      <div className="flex h-full w-72 rounded-xl overflow-hidden " >
        <Sidebar />
      </div>
      {children}
    </div>
  );
};

export default HomeLayout;
