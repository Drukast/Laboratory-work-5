var M, N, matrix = [], min = 999, col = 0;
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
        i = Number(i);
        for (var j in matrix) {
            j = Number(j);
            if (matrix[i][j] <= min) {
                min = matrix[i][j];
                col = j
            }
        }
    }
    for (var i in matrix) {
        alert(`Строка ${Number(i) + 1}: ${matrix[i]}`);
    }
    alert(`Минимальное элемент: ${min} находится в стобце ${col}`)
    for (var i = 0; i < matrix.length; i++) {
        for (var j in matrix[i]) {
            j = Number(j);
            if (j == col) {
                matrix[i].splice(col, 1);
            }
        }
    }
}