import Link from "next/link";
import { Button } from "@mui/material";
import "../app/globals.css";

const index = () => {
  return (
    <>
      <div className="h-screen w-auto flex flex-row justify-center items-center">
        <Button variant="contained" type="primary">
          <Link
            className="text-white"
            style={{ textDecoration: "none" }}
            href={"/dashboard"}
          >
            Go to Dashboard
          </Link>
        </Button>
      </div>
    </>
  );
};

export default index;
