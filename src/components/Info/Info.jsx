import { useState } from 'react'
import Container from '../Container/Container';
import styles from './Info.module.css'

function Info({title, description}){
    const [user, setUser] = useState('');
    const [currentUser, setCurrentUser] = useState(null);
    const [repos, setRepos] = useState(null);

    async function handleGetData() {
        const userData = await fetch(`https://api.github.com/users/${user}`)
        const newUser = await userData.json();

        if(newUser.name){
            const {avatar_url, name, bio, login} = newUser;
            setCurrentUser({avatar_url, name, bio, login});

            const reposData = await fetch(`https://api.github.com/users/${user}/repos`)
            const newRepos = await reposData.json();

            if(newRepos.length){
                setRepos(newRepos);
            }
        }
    }

    return (
        <div>
        <Container>
        <div className={styles.info}>
            <div>
                <input name='usuario' 
                value={user} 
                onChange={e => setUser(e.target.value)} 
                placeholder='@username' />
                <button onClick={handleGetData}>Buscar</button>
            </div>
        </div>
        {currentUser?.name ? ( 
        <div className={styles.perfil}>
            <img src={currentUser.avatar_url} 
            alt="profile" className={styles.profile} />
            <div>
                <h3>
                {currentUser.name} 
                </h3>
                <span>
                @{currentUser.login} 
                </span>
                <p>
                {currentUser.bio} 
                </p>
            </div>
        </div>
        ): null}
        {repos?.length ? ( 
            
        <div className={styles.repository_list}>
        <h4>Repositórios</h4>
        {repos.map((repo) => (
            <div>   
            <strong>{repo.name}</strong>
            <p>{repo.description}</p>
            <hr />
            </div>    
        ))}
        </div>
        ): null};
        </Container>
        </div>
    )
}

export default Info