import React from "react";

import { MasterSelect, SelectBasic } from "./styles";

const Select: React.FC = () => {
  return (
    <>
      <MasterSelect>
        <SelectBasic>
          <option value="Temporada 1" className="select">
            Temporada 1
          </option>
          <option value="Temporada 2" className="select">
            Temporada 2
          </option>
          <option value="Temporada 3" className="select">
            Temporada 3
          </option>
          <option value="Temporada 4" className="select">
            Temporada 4
          </option>
        </SelectBasic>
      </MasterSelect>
    </>
  );
};
export default Select;
