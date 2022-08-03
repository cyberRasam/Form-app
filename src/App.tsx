import React, { FormEvent, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { File } from '@babel/types';

type FormState = {
  email: string;
  name: string;
  message: string;
  number: number;
};

function App() {
  const formId = 'FBFiNBpD';
  const formSparkUrl = `https://submit-form.com/${formId}`;

  const initialFormState = {
    email: '',
    name: '',
    message: '',
    number: 0,
  };

  const [formState, setFormState] = useState<FormState>(initialFormState);

  const submitForm = async (event: FormEvent) => {
    event.preventDefault();
    await postSubmission();
  };

  const postSubmission = async () => {
    const payload = {
      message: 'test formspark submission',
    };

    try {
      const result = await axios.post(formSparkUrl, payload);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-full flex justify-center flex-col">
      <div className="w-2/3 m-auto p-8 shadow-lg">
        <h1 className="text-4xl font-bold flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 transform rotate-45"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
          </svg>
          <span>Contact us</span>
        </h1>
        <form className="flex flex-col" onSubmit={submitForm}>
          <div className="my-2 flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="border-2 p-2"
              id="name"
              value={formState.name}
            />
          </div>
          <button className="my-2 bg-blue-700 text-white w-full p-2 hover:bg-blue-900 transition-colors duration-200">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
