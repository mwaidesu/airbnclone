import "./App.css";
import SearchIcon from "@mui/icons-material/Search";
// import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import IconBox from "./components/IconBox";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import LandscapeOutlinedIcon from '@mui/icons-material/LandscapeOutlined';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import BurstModeOutlinedIcon from '@mui/icons-material/BurstModeOutlined';

function App() {
  return (
    <>
      <header>
        <div className="grid grid-cols-3 px-16 w-screen h-20 border-b-[1px] items-center">
          <img src="../src/assets/logo.png" alt="logo" className="h-16 w-28" />

          <div className="flex justify-evenly items-center border rounded-full shadow-md h-12 w-96">
            <button className="border-r-2 text-sm font-medium px-4">
              Anywhere
            </button>
            <button className="border-r-2 text-sm font-medium px-4">
              Any week
            </button>
            <button className="text-sm font-medium text-gray-500 px-4">
              Add guests
            </button>
            <SearchIcon className="material-symbols-outlined rounded-full bg-red-500 p-1 text-white" />
          </div>

          <div className="flex justify-items items-center gap-8">
            <button className="text-sm font-medium">Airbnb your home</button>
            <LanguageOutlinedIcon />

            <div className="flex justify-evenly items-center gap-2 rounded-full border shadow-md  h-10 w-20 py-1.25 pr-1.25 pl-2">
              <MenuOutlinedIcon />
              <button className="bg-black text-white rounded-full text-center w-7 h-7 text-[10px] font-semibold">
                E
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center h-24 space-x-5 ">
            <IconBox OptionIcon={<LandscapeOutlinedIcon/>} OptionText={"Countryside"} />
            <IconBox OptionIcon={<DinnerDiningIcon/>} OptionText={"Bed & Breakfast"}/>
            <IconBox OptionIcon={<BurstModeOutlinedIcon/>} OptionText={"Amazing Views"}/>
            <IconBox OptionIcon={<DinnerDiningIcon/>} OptionText={"Bed & Breakfast"}/>
            <IconBox OptionIcon={<DinnerDiningIcon/>} OptionText={"Bed & Breakfast"}/>
            <IconBox OptionIcon={<DinnerDiningIcon/>} OptionText={"Bed & Breakfast"}/>
            <IconBox OptionIcon={<DinnerDiningIcon/>} OptionText={"Bed & Breakfast"}/>
            <IconBox OptionIcon={<DinnerDiningIcon/>} OptionText={"Bed & Breakfast"}/>
            <IconBox OptionIcon={<DinnerDiningIcon/>} OptionText={"Bed & Breakfast"}/>
            <IconBox OptionIcon={<DinnerDiningIcon/>} OptionText={"Bed & Breakfast"}/>
            <IconBox OptionIcon={<DinnerDiningIcon/>} OptionText={"Bed & Breakfast"}/>
            <IconBox OptionIcon={<DinnerDiningIcon/>} OptionText={"Bed & Breakfast"}/>



            <ArrowCircleRightOutlinedIcon />

            <div className="flex">
              <SyncAltIcon />
              <p>Filters</p>
            </div>
          </div>
        </div>
      </header>
      <main></main>
      <footer></footer>
    </>
  );
}

export default App;
