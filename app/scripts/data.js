var icon = function(name) {
	return document.createTextNode('1111'); //'<i class="fa ' + name + '"></i>';
};

var props = [{
	name: 'Название',
	value: 'Мой проект'
}, {
	name: 'Состояние',
	value: 'Активный'
}];

var agents = [
	['','Иванов И.И.', 'Первый'],
	['','Петров В.А.', 'Второй'],
	['','Петров В.А.', 'Третий']
];

var list = [
	['Входящий', 'Антей', '10.10.2014', '10.10.2014'],
	['Исходящий', 'Европа', '10.10.2014', '10.10.2014'],
	['Входящий', 'Европа', '10.10.2014', '10.10.2014'],
	['Исходящий', 'Альфа', '10.10.2014', '10.10.2014'],
	['Входящий', 'Норд', '10.10.2014', '10.10.2014'],
];

var hist = [
	['10.10.2014 10:10', 'Создан'],
	['10.10.2014 10:20', 'Удален']
];

var rules = [
	['','','Первый'],
	['','','Второй'],
	['','','Третий']
]