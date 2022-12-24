import renderCharacters from "../utils/utils.js";

const header = () => {
    const searchForm = document.getElementById('searchForm');

    const searchCharacters = (e) => {
        e.preventDefault();
        const name = searchForm.name.value;
        fetchApi(name);
    };

    const fetchApi = async (name) => {

       try {
            const { data } = await axios.get(`https://rickandmortyapi.com/api/character/?name=${name}`);
            renderCharacters(data);
       } catch (error) {
            console.log(error);
       } finally {
            window.scrollTo(0, 0);
       }
    };

    searchForm.addEventListener('submit', searchCharacters);
};

export default header;