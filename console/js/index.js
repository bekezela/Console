function IsOperator(character)
	{
      var operators = ["+","-","/","*"];
      for (var index = 0; index < operators.length; index++)
      {
		if (character.trim() === operators[index].trim())
		{
			return character;
		}
      }
    }

	function Tokenize(expression)
	{
		var expression = expression.trim();
		var copy = expression;

		expression = expression.replace(/[0-9]+/g, "#").replace(/[\(|\|\.)]/g, "");
		var numbers = copy.split(/[^0-9\.]+/);
		var operators = expression.split("#").filter(function(n){return n});
		var result = [];

		for(index = 0; index < numbers.length; index++){
			 result.push(numbers[index]);
			 if (index < operators.length) result.push(operators[index]);
		}

		return result;
	}

	function Compute(array)
	{

		for(index = 0; index < array.length; index++)
		{

			if (IsOperator(array[index]) === " + ")
			{
				return parseFloat(array[index-1]) + parseFloat(array[index+1])
			}
			if (IsOperator(array[index]) === " - ")
			{
				return parseFloat(array[index-1]) - parseFloat(array[index+1])
			}
			if (IsOperator(array[index]) === " * ")
			{
				return parseFloat(array[index-1]) * parseFloat(array[index+1])
			}
			if (IsOperator(array[index]) === " / ")
			{
				return parseFloat(array[index-1]) / parseFloat(array[index+1])
			}
		}
	}

    document.addEventListener('keyup', (event) => {
      const keyName = event.key;

      var x = document.getElementById('info').value;


      if (keyName === 'Enter')
	  {
          var tokens = Tokenize(x);
          var result = Compute(tokens);

          var input = document.createElement('p');
          input.className = 'in';
          input.appendChild(document.createTextNode(x))

          var output = document.createElement('p');
          output.className = 'out';
          output.appendChild(document.createTextNode(result))

          var exchange = document.createElement('div');
          exchange.className = 'exchange'
          exchange.appendChild(input);
          exchange.appendChild(output);

          document.getElementById("output").appendChild(exchange);
      }
    }, false);