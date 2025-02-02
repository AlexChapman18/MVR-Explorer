import { useProgressStepsContext } from "../../contexts/ProgressContext.tsx";
import MVRMain from "../../MVR-Renderer/Main.ts";
import IAction from "./IAction.ts";

const FileUpload: IAction = (ActionIcon, containerClasses, iconClasses) => {
    const psContext = useProgressStepsContext();

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputElement = event.target as HTMLInputElement;
        if (!inputElement || !inputElement.files || !inputElement.files[0])
            throw new Error("Error, no target or files");
        MVRMain.loadFile(inputElement.files[0], psContext);
    };

    return (
        <label htmlFor="fileInput" className={containerClasses}>
            <ActionIcon classes={iconClasses} />
            <input id="fileInput" type="file" accept=".mvr" onChange={handleFileChange} className="hidden"></input>
        </label>
    );
};

export default FileUpload;
