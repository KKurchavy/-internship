class SingleOutputComponent {

	createComponent(text) {
		const component = document.createElement('li');
		component.innerText = text;

		return component;
	}

}