/**
 * createReportObject - creates an employee report
 * @param {object} employessList - The employee object containing department and employees;
 * @returns {object} Report.
 */

export default function createReportObject(employeesList) {
  const report = {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments: (List) => Object.keys(List).length,
  };

  return report;
}
