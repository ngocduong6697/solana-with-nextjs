import styles from '@app/styles/Home.module.scss'

const HomePage = () => {
  return (
    <div>
      <h1 className={styles.title}>Ngoc test home page</h1>
      <ul>
        <li>
          <a href="#">Link1</a>
        </li>
        <li>
          <a href="#">Link2</a>
        </li>
        <li>
          <a href="#">Link3</a>
        </li>
      </ul>
    </div>
  )
}
export default HomePage
