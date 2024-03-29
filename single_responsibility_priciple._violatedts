const httpClient = new HttpClient();

export function filterEcployees(httpClient: HttpClient, filters) {
  filters = removeDuplicateEmployees(filters);

  try {
    httpClient
      .get('api/emplayees')
      .then((employees) => {
        const result = applyFilter(employees);
        const list = document.getElementById('#employeeList');
        result.forEach((employee) => {
          const employeeItem = document.createElement('li');
          employeeItem.innerHtml = `<strong>${employee.firstName} ${employee.lastName}</strong>`;
          list?.appendChild(employeeItem);
        });
        result.forEach((employee) => {
          httpClient.post('api/employees  /record', employee);
        });
      })
      .catch((error) => {
        console.error(`Error occured at network call ${error}`);
      });
  } catch (err) {
    console.error(`Error occured at app level ${err}`);
  }
}

function removeDuplicateEmployees(employees: any[]) {
  return employees;
}

function applyFilter(employes: any[]) {
  return employees;
}
