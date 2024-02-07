using System;
using System.Linq;

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;

using DevExtreme.NETCore.Demos.Models.DataGrid;

namespace DevExtreme.NETCore.Demos.Controllers {
    public class RemoteValidationController : Controller {
        InMemoryEmployeesValidationDataContext _db;

        public RemoteValidationController(IHttpContextAccessor httpContextAccessor, IMemoryCache memoryCache) {
            _db = new InMemoryEmployeesValidationDataContext(httpContextAccessor, memoryCache);
        }

        [HttpPost]
        //public JsonResult CheckUniqueEmailAddress([FromBody] JObject data) {
        public JsonResult CheckUniqueEmailAddress(EmployeeValidation data) {
            var isValid = !_db.Employees.Any(emp => {
                var isEqual = string.Equals(emp.Email, data.Email, StringComparison.OrdinalIgnoreCase);
                return data.ID != emp.ID && isEqual;
            });
            return Json(isValid);
        }

        [HttpPost]
        public JsonResult CheckEmailAddress(string email) {
            bool isInvalid = string.Equals(email, "test@dx-email.com", StringComparison.OrdinalIgnoreCase);
            return Json(!isInvalid);
        }
    }
}
