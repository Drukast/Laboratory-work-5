var M, N, matrix = [], max = 0, rows = [];
M = Number(prompt("Введите Кол-во Строк", ""));
N = Number(prompt("Введите Кол-во столбцов", ""));
if ((!(isNaN(M)) && (M % 1 == 0) && (M > 0)) && (!(isNaN(N)) && (N % 1 == 0) && (N > 0))) {
    for (var i = 0; i < M; i++) {
        let submatrix = [];
        for (var j = 0; j < N; j++) {
            submatrix.push(Math.round((Math.random() * 100)));
        }
        matrix.push(submatrix);
    }
    for (var i in matrix) {
        alert(`Строка ${Number(i) + 1}: ${matrix[i]}`);
    }
}