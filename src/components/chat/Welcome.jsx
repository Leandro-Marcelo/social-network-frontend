import { useSelector } from "react-redux";
import Robot from "../../assets/robot.gif";
export default function Welcome() {
    const auth = useSelector((state) => state.auth);
    return (
        <div className="flex justify-center items-center text-white flex-col">
            <img src={Robot} alt="" className="h-[20rem]" />
            {/* Welcome */}
            <h1>
                Bienvenido 👋,{" "}
                <span className="text-[#4e0eff]">{auth.user.name}!</span>
            </h1>

            {/* Please select a chat to Start messaging. */}
            <h3>Por favor selecciona un chat para empezar a chatear</h3>
        </div>
    );
}
