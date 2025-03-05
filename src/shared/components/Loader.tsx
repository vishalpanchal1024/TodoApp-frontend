import { FC, ReactElement } from "react";
import { Triangle } from "react-loader-spinner";

const Loader: FC = (): ReactElement => {
    return (
        <div className="h-screen w-full flex items-center justify-center">
            <Triangle
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    );
};

export default Loader;
