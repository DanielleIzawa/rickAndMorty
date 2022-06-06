import React from "react";

import {
  Container,
  Form,
  MasterSelect,
  MasterSelectContainer,
  SelectBasic,
} from "./styles";

const FormSearch: React.FC = () => {
  return (
    <>
      <Container>
        <Form>
          <fieldset>
            <input />
            <legend>Buscar Personagens</legend>
          </fieldset>

          <MasterSelectContainer>
            <fieldset>
              <MasterSelect>
                <SelectBasic>
                  <option value="volvo">Temporada 1</option>
                  <option value="saab">Temporada 2</option>
                  <option value="mercedes">Temporada 3</option>
                  <option value="audi">Temporada 4</option>
                </SelectBasic>
              </MasterSelect>
              <legend>Status</legend>
            </fieldset>

            <fieldset>
              <MasterSelect>
                <SelectBasic>
                  <option value="volvo">Temporada 1</option>
                  <option value="saab">Temporada 2</option>
                  <option value="mercedes">Temporada 3</option>
                  <option value="audi">Temporada 4</option>
                </SelectBasic>
              </MasterSelect>
              <legend>Gênero</legend>
            </fieldset>
          </MasterSelectContainer>
        </Form>
      </Container>
    </>
  );
};
export default FormSearch;
