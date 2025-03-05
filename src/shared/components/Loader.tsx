import { FC, ReactElement } from "react";
import { Hourglass } from "react-loader-spinner";

const Loader: FC = (): ReactElement => {
    return (
        <div className="h-screen w-full flex items-center justify-center">
            <Hourglass
                visible={true}
                height="80"
                width="80"
                ariaLabel="hourglass-loading"
                wrapperStyle={{}}
                wrapperClass=""
                colors={['#306cce', '#72a1ed']}
            />
        </div>
    );
};

export default Loader;
