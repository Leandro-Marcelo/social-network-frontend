import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
export default function Logout() {
    return (
        <button
            /* onClick={handleClick} */
            className="flex justify-center items-center p-[0.5rem] rounded-[0.5rem] bg-[#9a86f3] border-none cursor-pointer"
        >
            <PowerSettingsNewIcon className="text-[1.3rem] text-[#ebe7ff]" />
        </button>
    );
}
