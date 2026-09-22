import uvicorn
import sys
import os

# Add backend directory to sys.path so app module is discoverable
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from app.config import settings

if __name__ == "__main__":
    host = os.getenv("HOST", "0.0.0.0")
    port = int(os.getenv("PORT", str(settings.PORT)))
    print("=" * 60)
    print(f"[*] Starting {settings.PROJECT_NAME} Backend on http://{host}:{port}")
    print(f"[*] Swagger Interactive API Docs: http://{host}:{port}/docs")
    print(f"[*] API Health Endpoint: http://{host}:{port}{settings.API_PREFIX}/health")
    print("=" * 60)
    uvicorn.run("app.main:app", host=host, port=port, reload=False)

