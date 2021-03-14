import React from 'react';

const Template = ({form}) => {
  return (
    <main className="todo-list-template">
      <div className="title">
        오늘 할 일
      </div>
      <section className="form-wrapper">
        {form}
      </section>
    </main>
  );
};

export default Template;
