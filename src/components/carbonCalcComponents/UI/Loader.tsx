type LoaderProps = {
    children?: any;
};

const Loader = ({ children }: LoaderProps) => {
    return (
        <div className="row my-5 text-center">
            <div className="col-md-12">{children}</div>
            <div className="offset-sm-5 col-sm-2 mt-4">
                <span className="loading loading-spinner loading-xs"></span>
            </div>
        </div>
    );
};

export default Loader;
