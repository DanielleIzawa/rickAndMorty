import React from "react";

import { MasterSelect, SelectBasic } from "./styles";

const Select: React.FC = () => {
  return (
    <>
      <MasterSelect>
        <SelectBasic>
          <option value="volvo">Temporada 1</option>
          <option value="saab">Temporada 2</option>
          <option value="mercedes">Temporada 3</option>
          <option value="audi">Temporada 4</option>
        </SelectBasic>
      </MasterSelect>
    </>
  );
};
export default Select;
