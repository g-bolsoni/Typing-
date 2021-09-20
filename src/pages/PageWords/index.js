import './style.css';
import React,{useState, useEffect} from 'react';
import wordList from '../../resources/words.json';
import Words from '../../components/Words';

const max_typed_keys = 30;

/* Gerar palavras aleatorias */
const getRandowWords = () => {
    const index = Math.floor(Math.random() * wordList.length) //Gera um indice aleatorio, multiplica pelo tamanho da json e arredonda para baixo
    const word = wordList[index];
    return word.toLowerCase();
}
const isValidKey = (key, word) =>{
    if(!word){
        return false;
    }
    const result = word.split('').includes(key);
    
    return result;

}
/* Gerar palavras aleatorias */
export default function PageWords(){
    /*Adicionar as teclas digitadas na tela */
    const [typed_keys, setTyped_keys] = useState([]);
    const handlekeyDown = (e) => {
        e.preventDefault();
        const { key } = e;
        console.log('Key: ', key)
        setTyped_keys((prev) =>  [...prev, key].slice(max_typed_keys * -1)); 
        if (isValidKey(key, word)){
            setValidKeys((prev) => {
                const isValidLength = prev.length <= word.length;
                const isNextChar = isValidLength && word[prev.length] === key;
                return ((isNextChar) ? [...prev, key] :  prev);
            })
        }
    }
     /*Adicionar as teclas digitadas na tela */
    /*realizar a exibição das palavras*/
    const [word, setWord] = useState('');
    useEffect(() => {
        setWord(getRandowWords());
    }, []);
    /*realizar a exibição das palavras*/
    const [validKeys, setValidKeys] = useState([]);
    /*Trocar palavra qnd ela acerta*/
    const [completedWords, setCompletedWords] = useState([]);
    useEffect(() => {
       const wordFromValidKeys = validKeys.join('').toLowerCase();
       if(word && word === wordFromValidKeys){
            //Buscar uma palavra nova
            let newWord =null;
            do{
                newWord  = getRandowWords();
            }while(completedWords.includes(newWord));
            setWord(newWord);
            //limpar o array validKeys
            setValidKeys([]);
            //adiconar word ao completedWords
            setCompletedWords((prev)=> [...prev, word]);
       }
    }, [word, validKeys,completedWords])
    /*Trocar palavra qnd ela acerta*/


    return (
        <div className='container' tabIndex="0" onKeyDown={handlekeyDown}>
          
            <div className="valid-keys">
                <Words word={word} validKeys={validKeys}/>
            </div>
            <div className="typed_keys">{typed_keys ? typed_keys.join(' ') : null }</div>
            <div className="completed-words">
                <ol>
                    {completedWords.map((word)=>{
                        return(
                            <li key={word}>{word}</li>
                        )
                    })}
                </ol>
            </div>
        </div>
    )
}