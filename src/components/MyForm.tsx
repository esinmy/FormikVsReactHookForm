import React, {FC} from 'react';

interface MyFormProps {
}

const MyForm: FC<MyFormProps> = ({children}) =>  {

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    }

  return (
    <div>
      <form onSubmit={(e) => onSubmit(e)}>
        <input type="text"></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MyForm;