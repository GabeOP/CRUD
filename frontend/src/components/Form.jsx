export default function Form() {
  return(
    <form>
      <label htmlFor="nome">Nome:</label>
      <input type="text" name="nome" id="nome" /><br/><br/>
      <label htmlFor="email">Email:</label>
      <input type="text" name="email" id="email" />
    </form>
  )
}