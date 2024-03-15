import { FaRegTrashCan, FaX } from "react-icons/fa6";
import Modal from "../components/Fragments/Modal";
import { useState } from "react";
import axios from "axios";

type PartiesValue = {
  id: number;
  parties_name: string;
  parties_chairman: string;
  vision_mission: string;
  parties_address: string;
  parties_image: string;
  setParties: () => void;
};

const DeletePartai = (props: PartiesValue) => {
  const [openDelete, setOpenDelete] = useState(false);

  const deleteParties = async (id: number) => {
    try {
      await axios.delete(`http://localhost:5000/api/v1/parties/${id}`);
      props.setParties();
      setOpenDelete(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button
        onClick={() => setOpenDelete(true)}
        className="px-4 py-2 bg-green-700 hover:bg-green-800 text-white rounded-md"
      >
        <span className="flex items-center gap-1">
          <FaRegTrashCan />
          Delete
        </span>
      </button>

      <Modal open={openDelete} onClose={() => setOpenDelete(false)}>
        <div className=" flex items-center justify-center flex-col">
          <div className="w-[350px] bg-white mt-[20px] px-[30px] py-[20px] rounded-[20px] ">
            <h1 className="text-[24px] font-[900] text-login text-center mb-[30px]">
              Are You Sure To Delete {props.parties_name}?
            </h1>

            <div className="flex justify-center items-center gap-[10px] mb-[20px]">
              <div>
                <button
                  onClick={() => setOpenDelete(false)}
                  className="px-4 py-2 bg-green-700 hover:bg-green-800 text-white rounded-md"
                >
                  <span className="flex items-center gap-1">
                    <FaX />
                    Close
                  </span>
                </button>
              </div>

              <div>
                <button
                  onClick={() => deleteParties(props.id)}
                  className="px-4 py-2 bg-green-700 hover:bg-green-800 text-white rounded-md"
                >
                  <span className="flex items-center gap-1">
                    <FaRegTrashCan />
                    Delete
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DeletePartai;