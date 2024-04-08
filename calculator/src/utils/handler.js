export const handleClick = (event, question, setQuestion, answer, setAnswer) => {
    const value = event.target.value;
  
    switch (value) {
      case '=': {
        if (question !== '') {
          let ans = '';
          try {
            ans = eval(question);
          } catch (err) {
            setAnswer('Math Error');
          }
          if (ans === undefined) setAnswer('Math Error');
          else {
            setAnswer(ans);
            setQuestion('');
          }
        }
        break;
      }
      case 'Clear': {
        setQuestion('');
        setAnswer('');
        break;
      }
      case 'Delete': {
        const str = question.substr(0, question.length - 1);
        setQuestion(str);
        break;
      }
      default: {
        setQuestion(question + value);
        break;
      }
    }
  };
  