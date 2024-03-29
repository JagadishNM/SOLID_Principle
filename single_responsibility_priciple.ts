import { HttpClient } from '@angular/common/http';

const httpClient = HttpClient;

filterEmployees(httpClient, []).then((employees) => {
  displayEmployees(result);
  recordEmployees(result, httpClient);
});

export function filterEmployees(
  httpClient: HttpClient,
  filters
): Promise<any> {
  try {
    filters = removeDuplicateEmployees(filters);
    return httpClient
      .get('api/emplayees')
      .then((employees) => {
        const result = applyFilter(employees);
        return result;
      })
      .catch((error) => {
        handleError(error, 'Error occured at network call');
      });
  } catch (err) {
    handleError(err, 'Error occured at app level');
  }
}

function recordEmployees(result: any[], httpClient: HttpClient) {
  result.forEach((employee) => {
    httpClient.post('api/employees  /record', employee);
  });
}

function displayEmployees(result: any[]) {
  const list = document.getElementById('#employeeList');
  result.forEach((employee) => {
    const employeeItem = document.createElement('li') as HTMLLIElement;
    employeeItem.innerHTML = `<strong>${employee.firstName} ${employee.lastName}</strong>`;
    list?.appendChild(employeeItem);
  });
}

function handleError(err: unknown, msg: string) {
  console.error(`${msg} ${err}`);
}

function removeDuplicateEmployees(employees: any[]) {
  return employees;
}

function applyFilter(employes: any[]) {
  return employees;
}
