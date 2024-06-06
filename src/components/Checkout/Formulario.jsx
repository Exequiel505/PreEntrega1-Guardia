const Formulario = ({ datosForm, handleChangeInput, handleSubmitForm }) => {
  return (
    <>
      <h1>Por favor llene este formulario para finalizar su compra</h1>
      <form className="form-checkout" onSubmit={handleSubmitForm}>
        <div className="box-input">
          <label>Nombre: </label>
          <input
            type="text"
            name="nombre"
            value={datosForm.nombre}
            onChange={handleChangeInput}
          />
        </div>
        <div className="box-input">
          <label>Telefono: </label>
          <input
            type="text"
            name="telefono"
            value={datosForm.telefono}
            onChange={handleChangeInput}
          />
        </div>
        <div className="box-input">
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={datosForm.email}
            onChange={handleChangeInput}
          />
        </div>

        <button className="button-submit" type="submit">Enviar Orden</button>
      </form>
    </>
  );
};

export default Formulario;
