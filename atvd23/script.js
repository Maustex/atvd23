
function executarTarefa(tarefa, tempo) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Tarefa "${tarefa}" concluída!`);
        }, tempo * 1000);
    });
}

async function adicionarTarefa() {
    const taskNameInput = document.getElementById('task-name');
    const taskTimeInput = document.getElementById('task-time');
    const taskOutput = document.getElementById('task-output');

    const tarefa = taskNameInput.value;
    const tempo = parseInt(taskTimeInput.value);

    if (!tarefa || isNaN(tempo)) {
        taskOutput.textContent = 'Por favor, insira uma tarefa válida e o tempo em segundos.';
        return;
    }

    taskOutput.textContent = `A tarefa "${tarefa}" está sendo executada...`;

    try {
        const resultado = await executarTarefa(tarefa, tempo);
        taskOutput.textContent = resultado;
    } catch (erro) {
        taskOutput.textContent = `Erro ao executar a tarefa: ${erro}`;
    }

    taskNameInput.value = '';
    taskTimeInput.value = '';
}

document.getElementById('add-task').addEventListener('click', adicionarTarefa);
