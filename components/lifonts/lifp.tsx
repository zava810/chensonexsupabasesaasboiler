"use client";

import React, { useState } from 'react';
import Select from 'react-select';
import data from './data.json';
import { v_to_f } from './vtof';

interface ScriptOption {
  olabel: string;
  ovalue: string;
  sfonts: Array<{ olabel: string; ovalue: string }>;
}

const FontPicker: React.FC = () => {
  const [script, setScript] = useState<ScriptOption | null>(null);
  const [sfont, setSFont] = useState<{ olabel: string; ovalue: string } | null>(null);
  const [sfontlist, setSFontList] = useState<Array<{ olabel: string; ovalue: string }>>([]);

  const handleScriptChange = (scriptObject: ScriptOption | null) => {
    setScript(scriptObject);
    if (scriptObject) {
      setSFontList(scriptObject.sfonts);
      setSFont(scriptObject.sfonts[0]);
      setBodyFont(scriptObject.ovalue);
    }
  };

  const handleSFontChange = (sfontObject: { olabel: string; ovalue: string } | null) => {
    setSFont(sfontObject);
    if (sfontObject) {
      setBodyFont(sfontObject.ovalue);
    }
  };



  const setBodyFont = (sval: string) => {
    document.body.className = "";
    const sf = v_to_f(sval);
    document.body.classList.add(sf);
    document.body.classList.add("antialiased");
  };

  return (
    <div style={{ width: 400, marginBottom: 20, color: 'black', backgroundColor: 'white' }} >
      <Select id='scriptsel'
        placeholder="select script"
        value={script}
        options={data}
        onChange={handleScriptChange}
        getOptionLabel={(x) => x.olabel}
        getOptionValue={(x) => x.ovalue}
      />
      <Select id='fontsel'
        placeholder="select sfont"
        value={sfont}
        options={sfontlist}
        onChange={handleSFontChange}
        getOptionLabel={(x) => x.olabel}
        getOptionValue={(x) => x.ovalue}
      />
    </div>
  );
};

export default FontPicker;
